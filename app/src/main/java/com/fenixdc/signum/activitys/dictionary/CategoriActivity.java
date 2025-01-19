package com.fenixdc.signum.activitys.dictionary;

import android.annotation.SuppressLint;
import android.os.Bundle;
import android.text.Editable;
import android.text.TextWatcher;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.bumptech.glide.Glide;
import com.bumptech.glide.request.RequestOptions;
import com.fenixdc.signum.R;
import com.fenixdc.signum.activitys.learn.LearnActivity;
import com.fenixdc.signum.activitys.profile.ProfileActivity;
import com.fenixdc.signum.entities.Categori;
import com.fenixdc.signum.entities.Sign;
import com.fenixdc.signum.recyclerview.RecyclerSignAdapter;
import com.fenixdc.signum.utils.GeneralUtils;
import com.google.firebase.firestore.FirebaseFirestore;
import com.google.firebase.firestore.QueryDocumentSnapshot;
import com.google.firebase.firestore.QuerySnapshot;

import java.util.ArrayList;

@SuppressLint("NotifyDataSetChanged")
public class CategoriActivity extends AppCompatActivity {
    Categori categori;
    TextView title;
    ImageView categoriImage, btnBack;
    EditText txtSearch;
    ArrayList<Sign> listSigns = new ArrayList<>();
    ArrayList<Sign> listSignsShow = new ArrayList<>();
    RecyclerView rvSigns;
    RecyclerSignAdapter signAdapter;
    ImageView btmDictionary, btmUser, btmLearn;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        EdgeToEdge.enable(this);
        setContentView(R.layout.activity_categori);
        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main), (v, insets) -> {
            Insets systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars());
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom);
            return insets;
        });

        GeneralUtils.showLoadingDialog(this);
        categori = (Categori) getIntent().getSerializableExtra("category");
        loadData();
    }

    private void setUpElements() {
        categoriImage = findViewById(R.id.imgCategori);
        Glide.with(this)
                .load(categori.getImageUrl())
                .apply(new RequestOptions().placeholder(R.drawable.imaguser))
                .into(categoriImage);
        title = findViewById(R.id.txtCategorititle);
        title.setText(categori.getName());
        btnBack = findViewById(R.id.btnBackCategori);
        rvSigns = findViewById(R.id.rvSigns);
        signAdapter = new RecyclerSignAdapter(listSignsShow);
        rvSigns.setAdapter(signAdapter);
        rvSigns.setLayoutManager(new LinearLayoutManager(this, LinearLayoutManager.VERTICAL,false));
        txtSearch = findViewById(R.id.txtExplorerCategori);
        btmDictionary = findViewById(R.id.btmCategoriDictionary);
        btmUser = findViewById(R.id.btmCategoriUser);
        btmLearn = findViewById(R.id.btmCategoriLearn);
        GeneralUtils.hideLoadingDialog(this);

        setUpListeners();
    }

    private void setUpListeners() {
        btnBack.setOnClickListener(v -> onBackPressed());
        btmLearn.setOnClickListener(v -> GeneralUtils.openActivity(this, LearnActivity.class, true));
        btmDictionary.setOnClickListener(v -> GeneralUtils.openActivity(this, DictionaryActivity.class, true));
        btmUser.setOnClickListener(v -> GeneralUtils.openActivity(this, ProfileActivity.class, true));
        txtSearch.addTextChangedListener(new TextWatcher() {
            @Override
            public void beforeTextChanged(CharSequence s, int start, int count, int after) {

            }

            @Override
            public void onTextChanged(CharSequence s, int start, int before, int count) {
                search();
            }

            @Override
            public void afterTextChanged(Editable s) {
                if(txtSearch.getText().toString().isEmpty()){
                    listSignsShow.clear();
                    listSignsShow.addAll(listSigns);
                    signAdapter.notifyDataSetChanged();
                }
            }
        });
    }

    private void loadData(){
        FirebaseFirestore.getInstance().collection("signs")
                .get()
                .addOnCompleteListener(task -> {
                    if (task.isSuccessful()) {
                        QuerySnapshot querySnapshot = task.getResult();
                        listSigns.clear();
                        listSignsShow.clear();

                        if (querySnapshot != null) {
                            for (QueryDocumentSnapshot document : querySnapshot) {
                                Sign sign = document.toObject(Sign.class);
                                if(sign.getIdCategorie() == categori.getId()){
                                    listSigns.add(sign);
                                    listSignsShow.add(sign);
                                }
                            }
                        }
                        setUpElements();
                    }
                });
    }

    private void search(){
        listSignsShow.clear();
        for (Sign sign: listSigns) {
            if(sign.getName().toLowerCase().contains(txtSearch.getText().toString().toLowerCase())){
                listSignsShow.add(sign);
            }
        }
        signAdapter.notifyDataSetChanged();
    }
}