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
import com.fenixdc.signum.entities.Sign;
import java.util.ArrayList;

public class RecyclerSignAdapter extends RecyclerView.Adapter<RecyclerSignAdapter.RecyclerSignHolder>{
    private final ArrayList<Sign> listSigns;

    public RecyclerSignAdapter(ArrayList<Sign> listSigns) {
        this.listSigns = listSigns;
    }

    @NonNull
    @Override
    public RecyclerSignAdapter.RecyclerSignHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.sign_item, parent, false);
        return new RecyclerSignHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull RecyclerSignAdapter.RecyclerSignHolder holder, int position) {
        holder.asignData(listSigns.get(position));
    }

    @Override
    public int getItemCount() {
        return listSigns.size();
    }

    public static class RecyclerSignHolder extends RecyclerView.ViewHolder {
        TextView signName, descSign;
        ImageView imgSign;
        public RecyclerSignHolder(@NonNull View itemView) {
            super(itemView);
            signName = itemView.findViewById(R.id.txtTitleSign);
            descSign = itemView.findViewById(R.id.txtDescSign);
            imgSign = itemView.findViewById(R.id.imgSign);
        }

        public void asignData(Sign sign){
            signName.setText(sign.getName());
            descSign.setText(sign.getDescription());
            Glide.with(itemView.getContext())
                    .load(sign.getImageUrl())
                    .apply(new RequestOptions().placeholder(R.drawable.imaguser))
                    .into(imgSign);
        }
    }
}
