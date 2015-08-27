#pragma strict

var bird: Transform; 
var offset : float;
var obj : GameObject;

function Start () {

	
	obj= GameObject.FindGameObjectWithTag("Player");
	if(!obj)
	{
		return;
	}
	bird=obj.transform;
	
	offset= transform.position.x - bird.position.x;
}

function Update () {

	
	if(bird)
	{
		transform.position.x= bird.position.x + offset;
	}


}