#pragma strict

var velocity: Vector3 =Vector3.zero;
var gravity: Vector3;
var flap: boolean= false;
var upBoost: Vector3;
var max: float =5.0;
var angle: float = 0.0;
var forwardVelocity: float = 2.0;
var an : Animator;
public var gameOverAnimator: Animator;
public var gameOverButtonAnimator: Animator;
public var gameOverButton1Animator: Animator;
public var dead : boolean = false;

var audioEff : AudioSource;
public var deadSound : AudioClip;

function Start () {	
	an = transform.GetComponentInChildren(Animator) ;
	audioEff = GetComponent(AudioSource);
}

function Update()
{	
	if(Input.GetMouseButtonDown(0))
	{
		flap=true;
		audioEff.Play();
	}
	
}


function FixedUpdate()
{//	script=GetComponent("paralax");
//	if(bool)
//	{	
		velocity.x=forwardVelocity;
//		script.job2();
//	}
	velocity += gravity * Time.deltaTime;
	transform.position+=velocity * Time.deltaTime;
	
	if(flap)
	{
//	bool=true;
	flap=false;
	velocity.y=0.0;
	velocity+=upBoost;
	an.SetTrigger("flap");
	}
	
	velocity=Vector3.ClampMagnitude(velocity,max);
	angle=0.0;
	if(velocity.y<0){
	angle=Mathf.Lerp(0,-90,-velocity.y/max*0.8);
	}
	transform.rotation=Quaternion.Euler(0,0,angle);
	
}


function OnCollisionEnter2D(other: Collision2D)
{
	gameOverAnimator.SetBool("gameOver",true);
	gameOverButtonAnimator.SetBool("gameOverButton",true);
	gameOverButton1Animator.SetBool("gameOverButton1",true);
	dead=true;
	audioEff.clip = deadSound;
	audioEff.Play();
	//bool=false;
	//velocity.x=0;
	//script.job1();
}


