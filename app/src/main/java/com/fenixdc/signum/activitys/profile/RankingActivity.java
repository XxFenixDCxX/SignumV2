package com.fenixdc.signum.activitys.profile;

import android.os.Bundle;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.fenixdc.signum.R;
import com.fenixdc.signum.activitys.dictionary.DictionaryActivity;
import com.fenixdc.signum.activitys.learn.LearnActivity;
import com.fenixdc.signum.entities.User;
import com.fenixdc.signum.recyclerview.RecyclerRankingAdapter;
import com.fenixdc.signum.utils.DialogUtils;
import com.fenixdc.signum.utils.GeneralUtils;
import com.fenixdc.signum.utils.UserUtils;

import java.util.ArrayList;
import java.util.List;

public class RankingActivity extends AppCompatActivity {
    List<ImageView> imgUsers = new ArrayList<>();
    List<TextView> txtUserNames = new ArrayList<>();
    List<TextView> txtUserPoints = new ArrayList<>();
    RecyclerView rvRanking;
    RecyclerRankingAdapter rankingAdapter;
    ImageView btnBack, btmUser, btmDictionary, btmLearn;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        EdgeToEdge.enable(this);
        setContentView(R.layout.activity_ranking);
        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main), (v, insets) -> {
            Insets systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars());
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom);
            return insets;
        });

        GeneralUtils.showLoadingDialog(this);
        setUpElements();
        setUpListeners();
        loadData();
    }

    private void setUpElements(){
        imgUsers.add(findViewById(R.id.imgUser1Ranking));
        imgUsers.add(findViewById(R.id.imgUser2Ranking));
        imgUsers.add(findViewById(R.id.imgUser3Ranking));
        txtUserNames.add(findViewById(R.id.txtRankingName1));
        txtUserNames.add(findViewById(R.id.txtRankingName2));
        txtUserNames.add(findViewById(R.id.txtRankingName3));
        txtUserPoints.add(findViewById(R.id.txtRankingPoints1));
        txtUserPoints.add(findViewById(R.id.txtRankingPoints2));
        txtUserPoints.add(findViewById(R.id.txtRankingPoints3));
        rvRanking = findViewById(R.id.rvRanking);
        rankingAdapter = new RecyclerRankingAdapter();
        rvRanking.setAdapter(rankingAdapter);
        rvRanking.setLayoutManager(new LinearLayoutManager(this, LinearLayoutManager.VERTICAL,false));
        btnBack = findViewById(R.id.btnBackRanking);
        btmUser = findViewById(R.id.btmRankingUser);
        btmDictionary = findViewById(R.id.btmRankingDictionary);
        btmLearn = findViewById(R.id.btmRankingLearn);
    }

    public void setUpListeners(){
        btnBack.setOnClickListener(v -> onBackPressed());
        btmUser.setOnClickListener(v -> onBackPressed());
        btmDictionary.setOnClickListener(v -> GeneralUtils.openActivity(this, DictionaryActivity.class, true));
        btmLearn.setOnClickListener(v -> GeneralUtils.openActivity(this, LearnActivity.class, true));
    }

    private void loadData(){
        UserUtils.getTopUsers(3, new UserUtils.OnTopUsersFetchListener() {
            @Override
            public void onSuccess(List<User> topUsers) {
                for (int i = 0; i < topUsers.size(); i++) {
                    asignUserData(txtUserNames.get(i), txtUserPoints.get(i), imgUsers.get(i), topUsers.get(i));
                }
            }

            @Override
            public void onFailure(String errorMessage) {
                DialogUtils.showErrorDialog(RankingActivity.this, getString(R.string.error),errorMessage);
            }
        });

        GeneralUtils.hideLoadingDialog(this);
    }

    private void asignUserData(TextView txtUsername, TextView txtPoints, ImageView imgUser, User user){
        txtUsername.setText(user.getUsername());
        txtPoints.setText(String.valueOf(user.getPoints()));
        GeneralUtils.loadImageFromUrl(user.getImageUrl(), imgUser);
    }

    @Override
    public void onBackPressed() {
        super.onBackPressed();
        GeneralUtils.openActivity(this, ProfileActivity.class, true);
    }
}