package com.fenixdc.signum.activitys;

import android.os.Bundle;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;
import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.fenixdc.signum.R;
import com.fenixdc.signum.entities.Categories;
import com.fenixdc.signum.recyclerview.RecyclerDictionaryAdapter;
import com.fenixdc.signum.utils.GeneralUtils;
import com.google.firebase.firestore.FirebaseFirestore;
import com.google.firebase.firestore.QueryDocumentSnapshot;
import com.google.firebase.firestore.QuerySnapshot;

import java.util.ArrayList;

public class DictionaryActivity extends AppCompatActivity {
    ArrayList<Categories> listCategories = new ArrayList<>();
    ArrayList<Categories> listCategoriesShow = new ArrayList<>();
    RecyclerView rvDictionary;
    RecyclerDictionaryAdapter dictionaryAdapter;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        EdgeToEdge.enable(this);
        setContentView(R.layout.activity_dictionary);
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

                        if (querySnapshot != null) {
                            for (QueryDocumentSnapshot document : querySnapshot) {
                                Categories category = document.toObject(Categories.class);
                                listCategories.add(category);
                                if(!category.isSubCategory()){
                                    listCategoriesShow.add(category);
                                }
                            }
                            setUpElements();
                        }
                    }
                });
    }

    private void setUpElements(){
        rvDictionary = findViewById(R.id.rvDictionary);
        rvDictionary.setLayoutManager(new GridLayoutManager(this,2));
        dictionaryAdapter = new RecyclerDictionaryAdapter(listCategoriesShow);
        rvDictionary.setAdapter(dictionaryAdapter);
        GeneralUtils.hideLoadingDialog(this);
    }
}