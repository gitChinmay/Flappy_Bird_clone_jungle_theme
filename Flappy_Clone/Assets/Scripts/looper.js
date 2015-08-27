#pragma strict
function Start () {

}

function Update () {

}

function OnTriggerEnter2D( other: Collider2D)
{
	if(other.tag =="bgJungle"){
		other.transform.position.x += ((13.5*3)-0.6);
	} 
	if(other.tag =="bgGrass"){
		other.transform.position.x += 17*3; 
	}
	if(other.tag =="trees"){
		Destroy(other.gameObject);
	}
}