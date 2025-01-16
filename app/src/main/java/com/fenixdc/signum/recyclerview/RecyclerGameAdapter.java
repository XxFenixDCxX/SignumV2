package com.fenixdc.signum.recyclerview;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.ProgressBar;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.bumptech.glide.Glide;
import com.bumptech.glide.request.RequestOptions;
import com.fenixdc.signum.R;
import com.fenixdc.signum.entities.Learn;

import java.util.ArrayList;

public class RecyclerGameAdapter extends RecyclerView.Adapter<RecyclerGameAdapter.RecyclerGameyHolder>{
    private final ArrayList<Learn> listCategories;
    private final OnItemClikListener listener;

    public RecyclerGameAdapter(ArrayList<Learn> listCategories, OnItemClikListener listener) {
        this.listCategories = listCategories;
        this.listener = listener;
    }

    @NonNull
    @Override
    public RecyclerGameAdapter.RecyclerGameyHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.learn_item, parent, false);
        return new RecyclerGameyHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull RecyclerGameAdapter.RecyclerGameyHolder holder, int position) {
        holder.asignData(listCategories.get(position), listener);
    }

    public interface OnItemClikListener{
        void onItemClick(Learn learn);
    }

    @Override
    public int getItemCount() {
        return listCategories.size();
    }

    public static class RecyclerGameyHolder extends RecyclerView.ViewHolder {
        TextView txtLearnCategorie;
        ImageView imgLearn;
        ProgressBar progressBar;

        public RecyclerGameyHolder(@NonNull View itemView) {
            super(itemView);
            txtLearnCategorie = itemView.findViewById(R.id.txtLearnCategori);
            imgLearn = itemView.findViewById(R.id.imgLearnCategorie);
            progressBar = itemView.findViewById(R.id.progressBar);
        }

        public void asignData(Learn learn, final OnItemClikListener listener){
            txtLearnCategorie.setText(learn.getName());
            Glide.with(itemView.getContext())
                    .load(learn.getImageUrl())
                    .apply(new RequestOptions().placeholder(R.drawable.imaguser))
                    .into(imgLearn);
            progressBar.setProgress(learn.getProgress());
            itemView.setOnClickListener(v -> listener.onItemClick(learn));
        }
    }
}
