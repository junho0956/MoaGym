export interface CategoryListComponent{
    categoryListItem: CategoryListItemComponent[]
}

export interface CategoryListItemComponent{
    categoryId: string,
    categoryImageUrl: string,
    categoryName: string
}