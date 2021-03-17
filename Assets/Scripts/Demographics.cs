using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;

public class Demographics : MonoBehaviour
{

    public Dropdown age;
    public Dropdown gender;
    public Dropdown race;

    public static string _age;
    public static string _gender;
    public static string _race;

    void Update()
    {
        _age = age.options[age.value].ToString();
        _gender = gender.options[gender.value].ToString();
        _race = race.options[race.value].ToString();

        DataStorage._age = _age;
        DataStorage._gender = _gender;
        DataStorage._race = _race;
    }

    public void onClick()
    {
        SceneManager.LoadScene(3);
    }
}
