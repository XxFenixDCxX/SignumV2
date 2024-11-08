package com.fenixdc.signum.recyclerview;

import android.annotation.SuppressLint;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.fenixdc.signum.R;
import com.fenixdc.signum.entities.User;
import com.fenixdc.signum.utils.GeneralUtils;
import com.fenixdc.signum.utils.UserUtils;

import java.util.ArrayList;
import java.util.List;

public class RecyclerRankingAdapter extends RecyclerView.Adapter<RecyclerRankingAdapter.RecyclerRankingHolder> {
    private final ArrayList<User> listUsers = new ArrayList<>();

    public RecyclerRankingAdapter() {
        fetchRankingUsers();
    }

    private void fetchRankingUsers() {
        UserUtils.getTopUsers(new UserUtils.OnTopUsersFetchListener() {
            @SuppressLint("NotifyDataSetChanged")
            @Override
            public void onSuccess(List<User> topUsers) {
                listUsers.clear();
                listUsers.addAll(topUsers);
                notifyDataSetChanged();
            }

            @Override
            public void onFailure(String errorMessage) {

            }
        });
    }

    @NonNull
    @Override
    public RecyclerRankingAdapter.RecyclerRankingHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.ranking_item, parent, false);
        return new RecyclerRankingHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull RecyclerRankingAdapter.RecyclerRankingHolder holder, int position) {
        holder.asignData(listUsers.get(position), position + 1);
    }

    @Override
    public int getItemCount() {
        return listUsers.size();
    }

    public static class RecyclerRankingHolder extends RecyclerView.ViewHolder {
        TextView txtRanking, txtUsername, txtPoints;
        ImageView imgUser;

        public RecyclerRankingHolder(@NonNull View itemView) {
            super(itemView);
            txtRanking = itemView.findViewById(R.id.txtRankingPosition);
            txtUsername = itemView.findViewById(R.id.txtNameRanking);
            txtPoints = itemView.findViewById(R.id.txtPointsRanking);
            imgUser = itemView.findViewById(R.id.imgUserRanking);
        }

        public void asignData(User user, int rankingPosition){
            txtRanking.setText(String.valueOf(rankingPosition));
            txtUsername.setText(user.getUsername());
            txtPoints.setText(String.valueOf(user.getPoints()));
            GeneralUtils.loadImageFromUrl(user.getImageUrl(), imgUser);
        }
    }
}
