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
import com.fenixdc.signum.entities.Categories;

import java.util.ArrayList;

public class RecyclerDictionaryAdapter extends RecyclerView.Adapter<RecyclerDictionaryAdapter.RecyclerDictionaryHolder> {
    ArrayList<Categories> listCategories;

    public RecyclerDictionaryAdapter(ArrayList<Categories> listCategories) {
        this.listCategories = listCategories;
    }

    @NonNull
    @Override
    public RecyclerDictionaryHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.category_item, parent, false);
        return new RecyclerDictionaryHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull RecyclerDictionaryHolder holder, int position) {
        holder.asignData(listCategories.get(position));
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

        public void asignData(Categories category){
            txtCategoryName.setText(category.getName());
            Glide.with(itemView.getContext())
                    .load(category.getImageUrl())
                    .apply(new RequestOptions().placeholder(R.drawable.imaguser))
                    .into(imgCategory);
        }
    }
}
