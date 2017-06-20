import { Component, OnInit } from '@angular/core';
import { GlyphiconsService } from './glyphicons.service';

@Component({
  selector: 'app-glyphicons',
  templateUrl: './glyphicons.component.html',
  styleUrls: ['./glyphicons.component.css'],
  providers: [GlyphiconsService]
})
export class GlyphiconsComponent implements OnInit {

  glyphicons = [];

  constructor(private glyphiconsService: GlyphiconsService) { }

  ngOnInit() {
    this.glyphicons = this.glyphiconsService.getGlyphicons();
  }

}
