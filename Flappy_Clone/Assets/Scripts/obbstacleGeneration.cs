using UnityEngine;
using System.Collections;

public class obbstacleGeneration : MonoBehaviour {

	GameObject[] trees;

	int num=0;

	// Use this for initialization
	void Start () {
		trees = new GameObject[3];
		trees = Resources.LoadAll<GameObject>("trees");

	}
	
	// Update is called once per frame
	void Update () {
	
	}

	void OnTriggerEnter2D(Collider2D col){
		if (col.transform.tag == "trees") {
			if(num==1){
				num = Random.Range(0,3);
				Vector3 pos = col.transform.position;
				pos.x += 6;
				if(num == 1){
					pos.y = Random.Range(-38,-16)*0.1f;
				}
				else if(num==0){
					pos.y = Random.Range(-45,-15)*0.1f;
				}
				else{
					pos.y = Random.Range(-71,-32)*0.1f;
				}
				Instantiate(trees[num],pos,Quaternion.identity);
			}
			else{
				num = Random.Range(0,3);
				Vector3 pos = col.transform.position;
				pos.x += 4;
				if(num == 1){
					pos.y = Random.Range(-38,-16)*0.1f;
				}
				else if(num==0){
					pos.y = Random.Range(-45,-15)*0.1f;
				}
				else{
					pos.y = Random.Range(-71,-32)*0.1f;
				}
				Instantiate(trees[num],pos,Quaternion.identity);
			}
			
		}
	}
}
