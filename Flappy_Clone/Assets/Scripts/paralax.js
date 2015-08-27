#pragma strict

var speed : float= 1.8; 

function Start () {

}

function FixedUpdate () {
	
	transform.position.x += speed * Time.deltaTime;
}

//function job1()
//{
//	speed=0.0;
//}

//function job2()
//{
//	speed=1.8;
//}