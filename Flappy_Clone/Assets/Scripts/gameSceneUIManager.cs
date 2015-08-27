using UnityEngine;
using System.Collections;
using UnityEngine.UI;

public class gameSceneUIManager : MonoBehaviour {
	public static int score=0;
	public Text scoretext;
	// Use this for initialization
	void Start () {
		score = 0;
	}
	
	// Update is called once per frame
	void Update () {
		scoretext.text = "Score: " + score;
		//Debug.Log (score);
	}

	public void goHome(){
		Application.LoadLevel("scene00");
	}

	public void restartGame(){
		Application.LoadLevel(Application.loadedLevel);
	}
}
