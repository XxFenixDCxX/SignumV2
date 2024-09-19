package com.fenixdc.signum.entities;

import android.app.Dialog;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.DialogFragment;

import com.bumptech.glide.Glide;
import com.fenixdc.signum.R;

public class ImageDialogFragment extends DialogFragment {

    private static final String ARG_IMAGE_URL = "image_url";

    public static ImageDialogFragment newInstance(String imageUrl) {
        ImageDialogFragment fragment = new ImageDialogFragment();
        Bundle args = new Bundle();
        args.putString(ARG_IMAGE_URL, imageUrl);
        fragment.setArguments(args);
        return fragment;
    }

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.dialog_image, container, false);

        ImageView imageView = view.findViewById(R.id.dialog_image_view);
        assert getArguments() != null;
        String imageUrl = getArguments().getString(ARG_IMAGE_URL);

        Glide.with(requireContext())
                .load(imageUrl)
                .placeholder(R.drawable.imaguser)
                .into(imageView);

        return view;
    }

    @NonNull
    @Override
    public Dialog onCreateDialog(Bundle savedInstanceState) {
        Dialog dialog = super.onCreateDialog(savedInstanceState);
        if (dialog.getWindow() != null) {
            dialog.getWindow().setLayout(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT);
            dialog.getWindow().setBackgroundDrawableResource(android.R.color.transparent);
        }
        return dialog;
    }
}
