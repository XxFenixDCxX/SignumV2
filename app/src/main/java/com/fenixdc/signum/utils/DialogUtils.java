package com.fenixdc.signum.utils;

import android.app.Activity;
import android.graphics.drawable.ColorDrawable;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.TextView;

import androidx.appcompat.app.AlertDialog;
import androidx.fragment.app.FragmentManager;

import com.fenixdc.signum.R;
import com.fenixdc.signum.entities.ImageDialogFragment;

public class DialogUtils {

    public static void showSuccessDialog(Activity activity, String title, String message) {
        AlertDialog.Builder builder =
                new AlertDialog.Builder(activity, R.style.AlertDialogCustom);
        View view = LayoutInflater.from(activity).inflate(
                R.layout.layout_success_dialog,
                activity.findViewById(R.id.layoutDialogContainer)
        );
        builder.setView(view);
        ((TextView) view.findViewById(R.id.textTitle)).setText(title);
        ((TextView) view.findViewById(R.id.textMessage)).setText(message);
        final AlertDialog alertDialog = builder.create();

        View.OnClickListener dismissDialogListener = view1 -> alertDialog.dismiss();

        view.findViewById(R.id.imageIconSuccess).setOnClickListener(dismissDialogListener);

        if (alertDialog.getWindow() != null){
            alertDialog.getWindow().setBackgroundDrawable(new ColorDrawable(0));
        }
        alertDialog.show();
    }

    public static void showWarningDialog(Activity activity, String title, String message) {
        AlertDialog.Builder builder =
                new AlertDialog.Builder(activity, R.style.AlertDialogCustom);
        View view = LayoutInflater.from(activity).inflate(
                R.layout.layout_warning_dialog,
                activity.findViewById(R.id.layoutDialogContainer)
        );
        builder.setView(view);
        ((TextView) view.findViewById(R.id.textTitle)).setText(title);
        ((TextView) view.findViewById(R.id.textMessage)).setText(message);
        final AlertDialog alertDialog = builder.create();

        View.OnClickListener dismissDialogListener = view1 -> alertDialog.dismiss();

        view.findViewById(R.id.imageIconWarning).setOnClickListener(dismissDialogListener);

        if (alertDialog.getWindow() != null){
            alertDialog.getWindow().setBackgroundDrawable(new ColorDrawable(0));
        }
        alertDialog.show();
    }

    public static void showErrorDialog(Activity activity, String title, String message) {
        AlertDialog.Builder builder =
                new AlertDialog.Builder(activity, R.style.AlertDialogCustom);
        View view = LayoutInflater.from(activity).inflate(
                R.layout.layout_error_dialog,
                activity.findViewById(R.id.layoutDialogContainer)
        );
        builder.setView(view);
        ((TextView) view.findViewById(R.id.textTitle)).setText(title);
        ((TextView) view.findViewById(R.id.textMessage)).setText(message);
        final AlertDialog alertDialog = builder.create();

        View.OnClickListener dismissDialogListener = view1 -> alertDialog.dismiss();

        view.findViewById(R.id.imageIconError).setOnClickListener(dismissDialogListener);

        if (alertDialog.getWindow() != null){
            alertDialog.getWindow().setBackgroundDrawable(new ColorDrawable(0));
        }
        alertDialog.show();
    }

    public static void showImageDialog(FragmentManager fragmentManager, String imageUrl) {
        ImageDialogFragment.newInstance(imageUrl)
                .show(fragmentManager, "image_dialog");
    }

}