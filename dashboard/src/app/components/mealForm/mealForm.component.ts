import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { MealsService } from '../services/meals.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mealForm',
  templateUrl: './mealForm.component.html',
  styleUrls: ['./mealForm.component.css'],
})
export class MealFormComponent implements OnInit {
  mealForm: FormGroup;

  constructor(private fb: FormBuilder, 
    private mealService: MealsService, 
    private router: Router) {
    this.mealForm = this.fb.group({
      // _id: new FormControl('', [Validators.required]),

      title: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      imageFile: new FormControl('', [Validators.required]),
    });
  }

  onSubmit(mealForm: FormGroup) {
    if (this.mealForm.valid) {
      // const formData = {
      //   _id: this.mealForm.get('_id')!.value,  
      //   title: this.mealForm.get('title')!.value,  
      //   category: this.mealForm.get('category')!.value,  
      //   price: this.mealForm.get('price')!.value,  
      //   imageFile: this.mealForm.get('imageFile')!.value  
      // };
      
      this.mealService.createMeal(this.mealForm.value).subscribe({
        next: (response) => {
          console.log('hello')
        //   if (response.status == "success") {
        //     this.router.navigate(['/meals']);
        //   } else {
        //     // Handle other response scenarios
        //     console.error('Unexpected response:', response);
        //   }
        // },
        error: (error) => {
          console.error('Error:', error);
          if (error.status === 400 && error.error && error.error.error === 'No file uploaded') {
            // Handle the case where no file was uploaded
            // For example, you might display an error message to the user
            console.error('No file uploaded');
          } else {
            // Handle other errors
          }
        }
      }})
    } else {
      this.mealForm.markAllAsTouched();
    }
  }
  
  

  ngOnInit() {}
}
