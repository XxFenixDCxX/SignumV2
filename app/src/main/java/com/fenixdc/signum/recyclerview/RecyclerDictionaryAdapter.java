package com.fenixdc.signum.recyclerview;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.bumptech.glide.Glide;
import com.bumptech.glide.request.RequestOptions;
import com.fenixdc.signum.R;
import com.fenixdc.signum.entities.Categori;

import java.util.ArrayList;

public class RecyclerDictionaryAdapter extends RecyclerView.Adapter<RecyclerDictionaryAdapter.RecyclerDictionaryHolder> {
    private final ArrayList<Categori> listCategories;
    private final OnItemClikListener listener;

    public RecyclerDictionaryAdapter(ArrayList<Categori> listCategories, OnItemClikListener listener) {
        this.listCategories = listCategories;
        this.listener = listener;
    }

    @NonNull
    @Override
    public RecyclerDictionaryHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.categori_item, parent, false);
        return new RecyclerDictionaryHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull RecyclerDictionaryHolder holder, int position) {
        holder.asignData(listCategories.get(position), listener);
    }

    public interface OnItemClikListener{
        void onItemClick(Categori category);
    }

    @Override
    public int getItemCount() {
        return listCategories.size();
    }

    public static class RecyclerDictionaryHolder extends RecyclerView.ViewHolder {
        TextView txtCategoryName;
        ImageView imgCategory;
        public RecyclerDictionaryHolder(@NonNull View itemView) {
            super(itemView);
            txtCategoryName = itemView.findViewById(R.id.txtItemCategory);
            imgCategory = itemView.findViewById(R.id.imgItemCategory);
        }

        public void asignData(Categori category, final OnItemClikListener listener){
            txtCategoryName.setText(category.getName());
            Glide.with(itemView.getContext())
                    .load(category.getImageUrl())
                    .apply(new RequestOptions().placeholder(R.drawable.imaguser))
                    .into(imgCategory);
            itemView.setOnClickListener(v -> listener.onItemClick(category));
        }
    }
}
