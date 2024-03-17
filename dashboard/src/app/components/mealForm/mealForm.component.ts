import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MealsService } from '../services/meals.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mealForm',
  templateUrl: './mealForm.component.html',
  styleUrls: ['./mealForm.component.css'],
})
export class MealFormComponent implements OnInit, OnChanges {
  @Input() data: any | null = null;
  @Output() mealUpdated: EventEmitter<void> = new EventEmitter<void>();
  mealForm: FormGroup;
  finalData: FormData | undefined;

  constructor(private fb: FormBuilder,
    private mealService: MealsService,
    private toast: ToastrService,
    private router: Router
  ) {
    this.mealForm = this.fb.group({
      title: ['', Validators.required],
      category: ['', Validators.required],
      price: ['0', Validators.required],
      description: ['', Validators.required],
      imageFile: [null]
    });
  }

  ngOnInit() {
    this.patchFormWithData();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && this['data']) {
      this.patchFormWithData();
    }
  }
  

  onSubmit() {
    if (this.mealForm.valid) {
      this.prepareFormData();
      if (this.data) {
        this.updateMeal();
      } else {
        this.createMeal();
      }
    } else {
      this.toast.error('Please fill in all required fields.');
    }
  }

  handleFileSelection(event: any) {
    const file = event.target.files[0];
    this.mealForm.patchValue({
      imageFile: file
    });
  }

  private prepareFormData() {
    this.finalData = new FormData();
    this.finalData.append('title', this.mealForm.get('title')!.value);
    this.finalData.append('category', this.mealForm.get('category')!.value);
    this.finalData.append('price', this.mealForm.get('price')!.value);
    this.finalData.append('description', this.mealForm.get('description')!.value);
    if (this.mealForm.get('imageFile')!.value) {
      this.finalData.append('imageFile', this.mealForm.get('imageFile')!.value);
    }
  }

  private createMeal() {
    this.mealService.createMeal(this.finalData!).subscribe({
      next: (response) => {
        this.router.navigateByUrl('/meals')
        this.toast.success('Meal created successfully.');
        this.mealUpdated.emit();
        this.resetForm();
      },
      error: (error: any) => {
        console.error('Error:', error);
      }
    });
  }

  private updateMeal() {
    this.mealService.updateMeal(this.data._id as string, this.finalData!).subscribe({
      next: (response) => {
        this.router.navigateByUrl('/meals')
        this.toast.success('Meal updated successfully.');
        this.mealUpdated.emit();
        this.resetForm();
      },
      error: (error: any) => {
        console.error('Error:', error);
      }
    });
  }
  private resetForm() {
    this.mealForm.reset({
      title: '',
      category: '',
      price: '0',
      description: ''
      
    });
  }
  
  private patchFormWithData() {
    if (this.data) {
      this.mealForm.patchValue({
        title: this.data.title,
        category: this.data.category,
        price: this.data.price,
        description: this.data.description
      });
    }
  }
}
