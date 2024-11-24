import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Observable, switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [HttpClientModule,CommonModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  productId:any;
  details$!: Observable<any>;
constructor(private router: Router,private apiService: ApiService,private route: ActivatedRoute){
  this.details$ = this.route.paramMap.pipe(
    switchMap((params) => {
      this.productId = params.get('id');
      // Fetch photos based on the dynamic productId
      if (this.productId) {
        return this.apiService.getById(this.productId);  // Assuming getById method takes the productId
      } else {
        return [];  // Return an empty array if no id is found
      }
    })
  );
}
GoBack(){
  this.router.navigate(['/photos-home'])
}
}
