import { Component, Input,  OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {
	@Input() postTitle: string;
  	@Input()  postContent: string;
  	@Input() postLoveIts: number = 0;
  	@Input() postDate: Date = new Date();
	
	constructor() { }

	ngOnInit() {
	}

  	getColor() {
	      return 'black';
	    
	}
	like(){
		
		console.log(this.postLoveIts + 1);
	}
	dislike(){
		
		console.log(this.postLoveIts - 1);
	}

}
