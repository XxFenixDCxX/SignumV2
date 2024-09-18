package com.fenixdc.signum.recyclerview;

import android.view.View;
import android.view.ViewGroup;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

public class RecyclerDictionaryAdapter extends RecyclerView.Adapter<RecyclerDictionaryAdapter.RecyclerDataHolder> {


    @NonNull
    @Override
    public RecyclerDictionaryAdapter.RecyclerDataHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        return null;
    }

    @Override
    public void onBindViewHolder(@NonNull RecyclerDictionaryAdapter.RecyclerDataHolder holder, int position) {

    }

    @Override
    public int getItemCount() {
        return 0;
    }

    public class RecyclerDataHolder extends RecyclerView.ViewHolder {
        public RecyclerDataHolder(@NonNull View itemView) {
            super(itemView);
        }
    }
}
