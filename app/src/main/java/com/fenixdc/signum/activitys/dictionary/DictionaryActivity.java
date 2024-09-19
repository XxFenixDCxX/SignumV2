package com.fenixdc.signum.activitys.dictionary;

import android.annotation.SuppressLint;
import android.content.Intent;
import android.os.Bundle;
import android.text.Editable;
import android.text.TextWatcher;
import android.widget.EditText;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;
import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.fenixdc.signum.R;
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
        loadData(true);
    }

    private void loadData(boolean setUpElements) {
        FirebaseFirestore.getInstance().collection("categories")
                .get()
                .addOnCompleteListener(task -> {
                    if (task.isSuccessful()) {
                        QuerySnapshot querySnapshot = task.getResult();
                        listCategories.clear();

                        if (querySnapshot != null) {
                            for (QueryDocumentSnapshot document : querySnapshot) {
                                Categori category = document.toObject(Categori.class);
                                category.setHasSubcategories(document.getBoolean("hasSubcategories"));
                                listCategories.add(category);
                                if(!category.isSubCategory()){
                                    listCategoriesShow.add(category);
                                }
                            }
                            if(setUpElements) setUpElements();
                            dictionaryAdapter.notifyDataSetChanged();
                        }
                    }
                });
    }

    private void reloadData(int idCategory){
        listCategoriesShow.clear();
        isSubCategory = true;
        for (Categori category: listCategories) {
            if(category.getCategoriDadId() != null && category.getCategoriDadId() == idCategory){
                listCategoriesShow.add(category);
            }
        }
    }

    private void setUpElements(){
        rvDictionary = findViewById(R.id.rvDictionary);
        rvDictionary.setLayoutManager(new GridLayoutManager(this,2));
        dictionaryAdapter = new RecyclerDictionaryAdapter(listCategoriesShow, category -> {
            if(category.hasSubcategories()){
                reloadData(category.getId());
                dictionaryAdapter.notifyDataSetChanged();
            } else {
                Intent intent = new Intent(this, CategoriActivity.class);
                intent.putExtra("category", category);
                startActivity(intent);
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
                    loadData(false);
                }
            }
        });
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
            loadData(false);
            isSubCategory = false;
            return;
        }
        super.onBackPressed();
    }
}