package com.fenixdc.signum.utils;

import android.content.Context;
import android.content.Intent;

import androidx.appcompat.app.AppCompatActivity;

public class GeneralUtils {

    public static void openActivity(Context context, Class<?> cls, boolean finish) {
        Intent intent = new Intent(context, cls);
        if (finish && context instanceof AppCompatActivity) {
            intent.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP | Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_CLEAR_TASK);
            ((AppCompatActivity) context).finish();
        }
        context.startActivity(intent);
    }

    public static void openActivity(Context context, Class<?> cls) {
        openActivity(context, cls, false);
    }
}
