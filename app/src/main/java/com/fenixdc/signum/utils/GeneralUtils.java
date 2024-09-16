package com.fenixdc.signum.utils;

import android.content.Context;
import android.content.Intent;

import androidx.appcompat.app.AppCompatActivity;
import androidx.fragment.app.FragmentManager;
import androidx.fragment.app.FragmentTransaction;

import com.fenixdc.signum.fragment.LoadingDialogFragment;

public class GeneralUtils {
    private static LoadingDialogFragment loadingDialogFragment;

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

    public static void showLoadingDialog(Context context) {
        if (loadingDialogFragment == null) {
            loadingDialogFragment = new LoadingDialogFragment();
        }
        if (!loadingDialogFragment.isAdded()) {
            FragmentManager fragmentManager = ((AppCompatActivity) context).getSupportFragmentManager();
            FragmentTransaction transaction = fragmentManager.beginTransaction();
            transaction.add(loadingDialogFragment, "loading_dialog");
            transaction.commitAllowingStateLoss();
        }
    }

    public static void hideLoadingDialog(Context context) {
        if (context instanceof AppCompatActivity) {
            AppCompatActivity activity = (AppCompatActivity) context;
            if (loadingDialogFragment != null && loadingDialogFragment.isAdded()) {
                FragmentManager fragmentManager = activity.getSupportFragmentManager();
                FragmentTransaction transaction = fragmentManager.beginTransaction();
                transaction.remove(loadingDialogFragment);
                transaction.commit();
                loadingDialogFragment = null; // Clear the reference
            }
        }
    }
}
