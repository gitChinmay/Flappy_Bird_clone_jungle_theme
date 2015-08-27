#pragma strict
var normal : Texture2D;
var hover : Texture2D;
var sound : AudioClip;
function Start () {

}

function OnMouseEnter () {
	GetComponent.<GUITexture>().texture=hover;
	GetComponent.<AudioSource>().clip=sound;
	GetComponent.<AudioSource>().Play();
}

function OnMouseExit () {
	GetComponent.<GUITexture>().texture=normal;
}

function OnMouseDown(){
	Application.LoadLevel("Quit");
}