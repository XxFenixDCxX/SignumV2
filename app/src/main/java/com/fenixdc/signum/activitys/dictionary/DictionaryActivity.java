package com.fenixdc.signum.activitys.dictionary;

import android.annotation.SuppressLint;
import android.os.Bundle;
import android.text.Editable;
import android.text.TextWatcher;
import android.widget.EditText;
import android.widget.ImageView;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;
import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.fenixdc.signum.R;
import com.fenixdc.signum.activitys.profile.ProfileActivity;
import com.fenixdc.signum.entities.Categori;
import com.fenixdc.signum.recyclerview.RecyclerDictionaryAdapter;
import com.fenixdc.signum.utils.GeneralUtils;
import com.google.android.material.bottomnavigation.BottomNavigationView;
import com.google.firebase.firestore.FirebaseFirestore;
import com.google.firebase.firestore.QueryDocumentSnapshot;
import com.google.firebase.firestore.QuerySnapshot;

import java.util.ArrayList;

@SuppressLint("NotifyDataSetChanged")
public class DictionaryActivity extends AppCompatActivity {
    ArrayList<Categori> listCategories = new ArrayList<>();
    ArrayList<Categori> listCategoriesShow = new ArrayList<>();
    EditText txtSearch;
    RecyclerView rvDictionary;
    RecyclerDictionaryAdapter dictionaryAdapter;
    boolean isSubCategory = false;
    BottomNavigationView menu;
    ImageView back;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        EdgeToEdge.enable(this);
        setContentView(R.layout.activity_dictionary);
        menu = findViewById(R.id.bttomNavDictionari);
        menu.setSelectedItemId(R.id.navDictionari);
        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main), (v, insets) -> {
            Insets systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars());
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom);
            return insets;
        });

        GeneralUtils.showLoadingDialog(this);
        loadData();
    }

    private void loadData() {
        FirebaseFirestore.getInstance().collection("categories")
                .get()
                .addOnCompleteListener(task -> {
                    if (task.isSuccessful()) {
                        QuerySnapshot querySnapshot = task.getResult();
                        listCategories.clear();
                        listCategoriesShow.clear();

                        if (querySnapshot != null) {
                            for (QueryDocumentSnapshot document : querySnapshot) {
                                Categori category = document.toObject(Categori.class);
                                category.setHasSubcategories(document.getBoolean("hasSubcategories"));
                                listCategories.add(category);
                                if(!category.isSubCategory()){
                                    listCategoriesShow.add(category);
                                }
                            }
                           setUpElements();
                            dictionaryAdapter.notifyDataSetChanged();
                        }
                    }
                });
    }

    private void loadOriginalData(){
        listCategoriesShow.clear();
        isSubCategory = false;
        for (Categori category: listCategories) {
            if(!category.isSubCategory()){
                listCategoriesShow.add(category);
            }
        }
        dictionaryAdapter.notifyDataSetChanged();
    }

    private void reloadData(int idCategory){
        listCategoriesShow.clear();
        isSubCategory = true;
        back.setImageResource(R.drawable.backbutton);
        for (Categori category: listCategories) {
            if(category.getCategoriDadId() != null && category.getCategoriDadId() == idCategory){
                listCategoriesShow.add(category);
            }
        }
    }

    @SuppressLint("NonConstantResourceId")
    private void setUpElements(){
        rvDictionary = findViewById(R.id.rvDictionary);
        back = findViewById(R.id.btnBackDictionary);
        rvDictionary.setLayoutManager(new GridLayoutManager(this,2));
        dictionaryAdapter = new RecyclerDictionaryAdapter(listCategoriesShow, category -> {
            if(category.hasSubcategories()){
                reloadData(category.getId());
                dictionaryAdapter.notifyDataSetChanged();
            } else {
                GeneralUtils.openActivityAndSendElement(this, CategoriActivity.class, "category", category);
            }
        });
        rvDictionary.setAdapter(dictionaryAdapter);
        txtSearch = findViewById(R.id.txtExplorar);
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
                    listCategoriesShow.clear();
                    loadOriginalData();
                }
            }
        });

        menu.setOnNavigationItemSelectedListener(item -> {
            int itemId = item.getItemId();
            if (itemId == R.id.navProfile) {
                GeneralUtils.openActivity(this, ProfileActivity.class);
            } else if (itemId == R.id.navLearn) {
                //toDo definir actividad de lear cuando se cree
                GeneralUtils.openActivity(this, ProfileActivity.class);
            }

            return true;
        });
        back.setOnClickListener(v ->
            onBackPressed()
        );
        GeneralUtils.hideLoadingDialog(this);
    }

    private void search(){
        listCategoriesShow.clear();
        for (Categori category: listCategories) {
            if(category.getName().toLowerCase().contains(txtSearch.getText().toString().toLowerCase())){
                listCategoriesShow.add(category);
            }
        }
        dictionaryAdapter.notifyDataSetChanged();
    }

    @Override
    public void onBackPressed() {
        if(isSubCategory){
            listCategoriesShow.clear();
            loadOriginalData();
            back.setImageResource(0);
            isSubCategory = false;
            return;
        }
        super.onBackPressed();
    }
}