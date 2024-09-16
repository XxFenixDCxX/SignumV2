package com.fenixdc.signum.utils;

import static com.fenixdc.signum.utils.GeneralUtils.openActivity;

import android.content.Context;

import androidx.appcompat.app.AppCompatActivity;

import com.fenixdc.signum.R;
import com.fenixdc.signum.activitys.DictionaryActivity;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.firestore.CollectionReference;
import com.google.firebase.firestore.DocumentReference;
import com.google.firebase.firestore.FirebaseFirestore;

import java.util.HashMap;
import java.util.Map;

public class UserUtils {

    private static final CollectionReference usersCollection = FirebaseFirestore.getInstance().collection("users");

    public static void registerUser(Context context, String username, String email) {
        DocumentReference document = usersCollection.document(email);

        Map<String, Object> data = new HashMap<>();
        data.put("username", username);
        data.put("email", email);

        document.set(data)
                .addOnSuccessListener(aVoid -> openActivity(context, DictionaryActivity.class, true))
                .addOnFailureListener(e -> DialogUtils.showErrorDialog((AppCompatActivity)context, context.getString(R.string.error), context.getString(R.string.erroRegister)));
    }

    public static boolean isLogedIn() {
        return FirebaseAuth.getInstance().getCurrentUser() != null;
    }
}
