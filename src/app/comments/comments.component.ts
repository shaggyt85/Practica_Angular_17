import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  template: `
    <h3>Comentario de lo que sea</h3>
    <img src="https://cdn.vox-cdn.com/thumbor/6WUQ-FozHdnzwKN7t31bJWPbdxI=/0x0:900x500/1400x1050/filters:focal(450x250:451x251)/cdn.vox-cdn.com/uploads/chorus_asset/file/6438793/this-is-fine.jpg" alt="meme">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut illo earum sed incidunt repellat cumque autem neque impedit optio! Aut enim repudiandae odio repellendus alias veritatis laboriosam qui. Recusandae, voluptatum.</p>
  `,
  styles: `
  img {
width: 100%;
height: auto;
  }`
})
export class CommentsComponent {

}
