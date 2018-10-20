import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
    PostListItemComponent  = [
	    {
	      title: "Mon premier post",
		  content: " Ceci est mon premier post qui a obtenu beaucoup de likes",
		  loveIts: 3,
		  created_at: new Date()
	    },
	    {
	      title: 'Mon douxième post',
	      content: "Ceci est mon douxième post qui a obtenu beaucoup de dislikes",
		  loveIts: -2,
		  created_at: new Date()
	    },
	    {
	      title: 'Encore post',
	      content: "Pas encore pas encore pas encore pas encore",
		  loveIts: 0,
		  created_at: new Date()
	    }
	];
    constructor() {
	   
    }
    
}
