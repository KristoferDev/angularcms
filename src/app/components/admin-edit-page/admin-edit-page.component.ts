import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PageService } from 'src/app/services/page.service';

declare var CKEDITOR: any;

@Component({
  selector: 'app-admin-edit-page',
  templateUrl: './admin-edit-page.component.html',
  styleUrls: ['./admin-edit-page.component.scss']
})
export class AdminEditPageComponent implements OnInit {
  page: any;
  title: string;
  content: string;
  id: string;
  successMsg: boolean = false;
  param: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private pageService: PageService
  ) {}

  ngOnInit() {
    if (localStorage.getItem('user') !== '"admin"') {
      this.router.navigateByUrl('');
    } else {
      CKEDITOR.replace('content');
    }

    this.route.params.subscribe(params => {
      this.param = params['id'];
      this.pageService.getEditPage(this.param).subscribe((page: any) => {
        this.page = page;
        this.title = page.title;
        this.content = page.content;
        this.id = page.id;
      });
    });
  }
}
