using UnityEngine;
using System.Collections;

public class UIManager : MonoBehaviour {

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	
	}

	public void newGame(){
		Application.LoadLevel ("scene01");
	}
	public void exitGame(){
		Application.Quit ();
	}
}
