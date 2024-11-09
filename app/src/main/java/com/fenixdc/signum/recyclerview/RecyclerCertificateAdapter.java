package com.fenixdc.signum.recyclerview;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.fenixdc.signum.R;
import com.fenixdc.signum.entities.User;

import java.util.ArrayList;
import java.util.Arrays;

public class RecyclerCertificateAdapter extends RecyclerView.Adapter<RecyclerCertificateAdapter.RecyclerCertificateHolder>{
    private final ArrayList<String> listCertificates;
    private final User currentUser;

    public RecyclerCertificateAdapter(User user) {
        this.listCertificates = new ArrayList<>(Arrays.asList(user.getCertificates().split(",")));
        this.currentUser = user;
    }

    @NonNull
    @Override
    public RecyclerCertificateAdapter.RecyclerCertificateHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.certificate_item, parent, false);
        return new RecyclerCertificateHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull RecyclerCertificateAdapter.RecyclerCertificateHolder holder, int position) {
        holder.asignData(listCertificates.get(position), currentUser);
    }

    @Override
    public int getItemCount() {
        return listCertificates.size();
    }

    public static class RecyclerCertificateHolder extends RecyclerView.ViewHolder {
        TextView userName, txtCertificate;

        public RecyclerCertificateHolder(@NonNull View itemView) {
            super(itemView);
            userName = itemView.findViewById(R.id.txtUsernameCertificate);
            txtCertificate = itemView.findViewById(R.id.txtCertificateText);
        }

        public void asignData(String certificate, User user){
            userName.setText(user.getUsername());
            txtCertificate.setText(certificate);
        }
    }
}
