package com.fenixdc.signum.activitys.dictionary;

import android.os.Bundle;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;

import com.bumptech.glide.Glide;
import com.bumptech.glide.request.RequestOptions;
import com.fenixdc.signum.R;
import com.fenixdc.signum.entities.Categori;

public class CategoriActivity extends AppCompatActivity {
    Categori categori;
    TextView title;
    ImageView categoriImage;

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

        setUpElements();
    }

    private void setUpElements() {
        categori = (Categori) getIntent().getSerializableExtra("category");
        categoriImage = findViewById(R.id.imgCategori);
        Glide.with(this)
                .load(categori.getImageUrl())
                .apply(new RequestOptions().placeholder(R.drawable.imaguser))
                .into(categoriImage);
        title = findViewById(R.id.txtCategorititle);
        title.setText(categori.getName());
    }
}