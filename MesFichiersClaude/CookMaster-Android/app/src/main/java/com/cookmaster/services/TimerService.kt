package com.cookmaster.services

import android.app.Notification
import android.app.NotificationChannel
import android.app.NotificationManager
import android.app.PendingIntent
import android.app.Service
import android.content.Context
import android.content.Intent
import android.os.Binder
import android.os.Build
import android.os.CountDownTimer
import android.os.IBinder
import androidx.core.app.NotificationCompat
import com.cookmaster.MainActivity
import com.cookmaster.R

class TimerService : Service() {

    private val binder = TimerBinder()
    private var countDownTimer: CountDownTimer? = null
    private var timeRemaining: Long = 0
    private var totalTime: Long = 0
    private var isTimerRunning = false

    private var timerCallback: ((Long) -> Unit)? = null
    private var completionCallback: (() -> Unit)? = null

    companion object {
        const val NOTIFICATION_ID = 1001
        const val CHANNEL_ID = "cookmaster_timer"
        const val ACTION_STOP_TIMER = "com.cookmaster.STOP_TIMER"
        const val ACTION_PAUSE_TIMER = "com.cookmaster.PAUSE_TIMER"
    }

    inner class TimerBinder : Binder() {
        fun getService(): TimerService = this@TimerService
    }

    override fun onCreate() {
        super.onCreate()
        createNotificationChannel()
    }

    override fun onBind(intent: Intent?): IBinder {
        return binder
    }

    override fun onStartCommand(intent: Intent?, flags: Int, startId: Int): Int {
        when (intent?.action) {
            ACTION_STOP_TIMER -> {
                stopTimer()
                stopForeground(STOP_FOREGROUND_REMOVE)
                stopSelf()
            }
            ACTION_PAUSE_TIMER -> {
                pauseTimer()
            }
        }
        return START_NOT_STICKY
    }

    fun startTimer(durationMillis: Long, onTick: (Long) -> Unit, onComplete: () -> Unit) {
        if (isTimerRunning) {
            stopTimer()
        }

        totalTime = durationMillis
        timeRemaining = durationMillis
        timerCallback = onTick
        completionCallback = onComplete
        isTimerRunning = true

        countDownTimer = object : CountDownTimer(durationMillis, 1000) {
            override fun onTick(millisUntilFinished: Long) {
                timeRemaining = millisUntilFinished
                timerCallback?.invoke(millisUntilFinished)
                updateNotification(millisUntilFinished)
            }

            override fun onFinish() {
                timeRemaining = 0
                isTimerRunning = false
                completionCallback?.invoke()
                showCompletionNotification()
                stopForeground(STOP_FOREGROUND_REMOVE)
                stopSelf()
            }
        }.start()

        // Start foreground service with notification
        startForeground(NOTIFICATION_ID, createNotification(durationMillis))
    }

    fun pauseTimer() {
        countDownTimer?.cancel()
        isTimerRunning = false
    }

    fun resumeTimer() {
        if (timeRemaining > 0 && !isTimerRunning) {
            startTimer(timeRemaining, timerCallback ?: {}, completionCallback ?: {})
        }
    }

    fun stopTimer() {
        countDownTimer?.cancel()
        countDownTimer = null
        isTimerRunning = false
        timeRemaining = 0
    }

    fun getTimeRemaining(): Long = timeRemaining

    fun isRunning(): Boolean = isTimerRunning

    private fun createNotificationChannel() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            val channel = NotificationChannel(
                CHANNEL_ID,
                "Cooking Timer",
                NotificationManager.IMPORTANCE_HIGH
            ).apply {
                description = "Notifications for cooking timers"
                enableVibration(true)
                enableLights(true)
            }

            val notificationManager = getSystemService(Context.NOTIFICATION_SERVICE) as NotificationManager
            notificationManager.createNotificationChannel(channel)
        }
    }

    private fun createNotification(millisRemaining: Long): Notification {
        val intent = Intent(this, MainActivity::class.java).apply {
            flags = Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_CLEAR_TASK
        }
        val pendingIntent = PendingIntent.getActivity(
            this, 0, intent,
            PendingIntent.FLAG_IMMUTABLE or PendingIntent.FLAG_UPDATE_CURRENT
        )

        val stopIntent = Intent(this, TimerService::class.java).apply {
            action = ACTION_STOP_TIMER
        }
        val stopPendingIntent = PendingIntent.getService(
            this, 0, stopIntent,
            PendingIntent.FLAG_IMMUTABLE or PendingIntent.FLAG_UPDATE_CURRENT
        )

        val timeText = formatTime(millisRemaining)

        return NotificationCompat.Builder(this, CHANNEL_ID)
            .setContentTitle("Cooking Timer")
            .setContentText("Time remaining: $timeText")
            .setSmallIcon(android.R.drawable.ic_menu_recent_history)
            .setContentIntent(pendingIntent)
            .setOngoing(true)
            .setPriority(NotificationCompat.PRIORITY_HIGH)
            .addAction(
                android.R.drawable.ic_delete,
                "Stop",
                stopPendingIntent
            )
            .build()
    }

    private fun updateNotification(millisRemaining: Long) {
        val notification = createNotification(millisRemaining)
        val notificationManager = getSystemService(Context.NOTIFICATION_SERVICE) as NotificationManager
        notificationManager.notify(NOTIFICATION_ID, notification)
    }

    private fun showCompletionNotification() {
        val intent = Intent(this, MainActivity::class.java).apply {
            flags = Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_CLEAR_TASK
        }
        val pendingIntent = PendingIntent.getActivity(
            this, 0, intent,
            PendingIntent.FLAG_IMMUTABLE or PendingIntent.FLAG_UPDATE_CURRENT
        )

        val notification = NotificationCompat.Builder(this, CHANNEL_ID)
            .setContentTitle("Cooking Complete!")
            .setContentText("Your food is ready")
            .setSmallIcon(android.R.drawable.ic_menu_recent_history)
            .setContentIntent(pendingIntent)
            .setPriority(NotificationCompat.PRIORITY_HIGH)
            .setAutoCancel(true)
            .build()

        val notificationManager = getSystemService(Context.NOTIFICATION_SERVICE) as NotificationManager
        notificationManager.notify(NOTIFICATION_ID + 1, notification)
    }

    private fun formatTime(millis: Long): String {
        val totalSeconds = millis / 1000
        val hours = totalSeconds / 3600
        val minutes = (totalSeconds % 3600) / 60
        val seconds = totalSeconds % 60

        return if (hours > 0) {
            String.format("%02d:%02d:%02d", hours, minutes, seconds)
        } else {
            String.format("%02d:%02d", minutes, seconds)
        }
    }

    override fun onDestroy() {
        stopTimer()
        super.onDestroy()
    }
}
