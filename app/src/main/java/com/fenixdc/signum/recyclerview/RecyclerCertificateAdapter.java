package com.fenixdc.signum.recyclerview;

import android.content.Context;
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
    private final Context context;

    public RecyclerCertificateAdapter(User user, Context context) {
        this.listCertificates = new ArrayList<>(Arrays.asList(user.getCertificates().split(",")));
        this.currentUser = user;
        this.context = context;
    }

    @NonNull
    @Override
    public RecyclerCertificateAdapter.RecyclerCertificateHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.certificate_item, parent, false);
        return new RecyclerCertificateHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull RecyclerCertificateAdapter.RecyclerCertificateHolder holder, int position) {
        holder.asignData(listCertificates.get(position), currentUser, context);
    }

    @Override
    public int getItemCount() {
        if(!listCertificates.isEmpty() && listCertificates.get(0).isEmpty()){
            return 0;
        }
        return listCertificates.size();
    }

    public static class RecyclerCertificateHolder extends RecyclerView.ViewHolder {
        TextView userName, txtCertificate;

        public RecyclerCertificateHolder(@NonNull View itemView) {
            super(itemView);
            userName = itemView.findViewById(R.id.txtUsernameCertificate);
            txtCertificate = itemView.findViewById(R.id.txtCertificateText);
        }

        public void asignData(String certificate, User user, Context context){
            String certificateText = context.getString(R.string.certificateText2) + " " + certificate;
            userName.setText(user.getUsername());
            txtCertificate.setText(certificateText);
        }
    }
}
