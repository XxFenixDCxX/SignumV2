package com.fenixdc.signum.utils;

import android.content.Context;
import android.content.Intent;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.net.Uri;
import android.widget.ImageView;

import androidx.appcompat.app.AppCompatActivity;
import androidx.fragment.app.FragmentManager;
import androidx.fragment.app.FragmentTransaction;

import com.fenixdc.signum.R;
import com.fenixdc.signum.fragment.LoadingDialogFragment;
import com.google.firebase.auth.FirebaseUser;
import com.google.firebase.storage.FirebaseStorage;
import com.google.firebase.storage.StorageReference;
import com.google.firebase.storage.UploadTask;
import com.squareup.picasso.Picasso;

import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.io.Serializable;
import java.net.HttpURLConnection;
import java.net.URL;

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

    public static void openActivityAndSendElement(Context context, Class<?> cls, String key, Object element) {
        Intent intent = new Intent(context, cls);
        intent.putExtra(key, (Serializable) element);
        context.startActivity(intent);
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
                loadingDialogFragment = null;
            }
        }
    }

    public static void uploadProfileImageToFirebase(FirebaseUser user, OnImageUploadListener listener) {
        Uri photoUrl = user.getPhotoUrl();
        if (photoUrl == null) {
            listener.onFailure("No se encontró URL de imagen de perfil.");
            return;
        }

        new Thread(() -> {
            try {
                URL url = new URL(photoUrl.toString());
                HttpURLConnection connection = (HttpURLConnection) url.openConnection();
                connection.setDoInput(true);
                connection.connect();
                InputStream input = connection.getInputStream();
                Bitmap bitmap = BitmapFactory.decodeStream(input);

                ByteArrayOutputStream baos = new ByteArrayOutputStream();
                bitmap.compress(Bitmap.CompressFormat.JPEG, 100, baos);
                byte[] data = baos.toByteArray();

                StorageReference storageReference = FirebaseStorage.getInstance().getReference()
                        .child("profileImages/" + user.getUid() + ".jpg");
                UploadTask uploadTask = storageReference.putBytes(data);
                uploadTask.addOnFailureListener(e -> listener.onFailure(e.getMessage()))
                        .addOnSuccessListener(taskSnapshot -> storageReference.getDownloadUrl().addOnSuccessListener(uri -> listener.onSuccess(uri.toString())).addOnFailureListener(e -> listener.onFailure(e.getMessage())));

            } catch (Exception e) {
                listener.onFailure("Error al descargar la imagen: " + e.getMessage());
            }
        }).start();
    }

    public interface OnImageUploadListener {
        void onSuccess(String downloadUrl);
        void onFailure(String errorMessage);
    }

    public static void loadImageFromUrl(String imageUrl, ImageView imageView) {
        if (imageUrl == null || imageUrl.isEmpty()) {
            imageView.setImageResource(R.drawable.defaultuserimage);
            return;
        }

        Picasso.get()
                .load(imageUrl)
                .placeholder(R.drawable.defaultuserimage)
                .error(R.drawable.defaultuserimage)
                .into(imageView);
    }
}
