import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { MealsService } from '../services/meals.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-mealForm',
  templateUrl: './mealForm.component.html',
  styleUrls: ['./mealForm.component.css'],
})
export class MealFormComponent implements OnInit, OnChanges {
  @Input() data: any | null = null;
  mealForm: FormGroup;
  finalData: FormData
  handleFileSelection(event: any) {
    // Implement your logic to handle file selection here (e.g., preview image, store filename)
    console.log('File selected:', event.target.files);
    this.finalData.append("imageFile", event.target.files[0])
  }

  constructor(private fb: FormBuilder,
    private mealService: MealsService,
    private router: Router,
    private toast: ToastrService
  ) {
    this.finalData = new FormData()
    this.mealForm = this.fb.group({
      // _id: new FormControl('', [Validators.required]),

      title: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      price: new FormControl('0', [Validators.required]),
    });
  }

  onSubmit(mealForm: FormGroup) {
    if (this.mealForm.valid) {
      if (this.data) {
        // Update existing meal
        this.finalData.append("title", this.mealForm.get('title')!.value)
        this.finalData.append("category", this.mealForm.get('category')!.value)
        this.finalData.append("price", this.mealForm.get('price')!.value)
        this.mealService.updateMeal(this.data._id as string, this.finalData)
          .subscribe({
            next: (response) => {
              console.log('hello in update');
              this.toast.success("updated");
            
            },
            error: (error: any) => {
              console.error('no thing updated', error);
            }
          });
      } else {
        this.finalData.append("title", this.mealForm.get('title')!.value)
        this.finalData.append("category", this.mealForm.get('category')!.value)
        this.finalData.append("price", this.mealForm.get('price')!.value)
        this.mealService.createMeal(this.finalData).subscribe({
          next: (response) => {
            console.log('hello');
            if (response.status == "success") {
              this.toast.info("meal created successfully");
              this.router.navigate(['/meals']);
            } else {
              //    
              error: (error: any) => {
                console.error('Error:', error);
                if (error.status === 400 && error.error && error.error.error === 'No file uploaded') {
                  // Handle the case where no file was uploaded
                  // For example, you might display an error message to the user
                  console.error('No file uploaded');
                } else {
                  // Handle other errors
                }
              }
            }
          }
        });
      }
    } else {
      console.error('No file selected. Please choose a file to upload.');
      this.mealForm.markAllAsTouched();
    }
  }


  ngOnChanges(): void {
    if (this.data) {
      this.mealForm.patchValue({
        title: this.data?.title,
        category: this.data?.category,
        price: this.data?.price,
        imageFile: this.data?.imageFile,

      })
    }
  }

  ngOnInit() { }
}
