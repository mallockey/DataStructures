#include <stdio.h>
#include <ctype.h>
#include <stdlib.h>

#define START_ARRAY_SIZE 5

typedef struct
{
    int length;
    int capacity;
    int *arr;
} DynamicArray;

int includes(DynamicArray *array, int num)
{
    for (int i = 0; i < array->length; i++)
    {
        if (*(array->arr + i))
        {
            return 1;
        }
    }

    return 0;
}

int expand(DynamicArray *array)
{
    int new_capacity = array->capacity * 2;
    int *new_arr = realloc(array->arr, sizeof(int) * new_capacity);

    if (new_arr == NULL)
    {
        printf("Something is worng");
        exit(1);
    }

    array->arr = new_arr;
    array->capacity = new_capacity;

    return 1;
}

int shrink(DynamicArray *array)
{
    int new_capacity = array->capacity / 2;
    int *new_arr = realloc(array->arr, sizeof(int) * new_capacity);

    printf("Shrinking");
    if (new_arr == NULL)
    {
        printf("Something is worng");
        exit(1);
    }

    array->capacity = new_capacity;

    return new_capacity;
}

int insert(DynamicArray *array, int item, int index)
{
    if (index < 0 || index >= array->length)
    {
        printf("Invalid index\n");
        return -1; // or some sentinel value
    }

    if (array->length == array->capacity)
    {
        expand(array);
    }

    for (int i = array->length; i >= index; i--)
    {
        array->arr[i + 1] = array->arr[i];
    }

    array->arr[index] = item;
    array->length++;

    return 1;
}

int delete(DynamicArray *array, int index)
{
    if (index < 0 || index >= array->length)
    {
        printf("Invalid index\n");
        return -1; // or some sentinel value
    }

    // capacity 120
    // length 10
    if (array->length < array->capacity / 4)
    {
        shrink(array);
    }

    int deleted_value = array->arr[index];

    for (int i = index; i < array->length - 1; i++)
    {
        array->arr[i] = array->arr[i + 1];
    }

    array->length--;

    return deleted_value;
}

int pop(DynamicArray *array)
{
    if (array->length < 1)
    {
        return -1;
    }

    int popped_item = array->arr[array->length - 1];
    array->length--;

    return popped_item;
}

int push(DynamicArray *array, int item)
{
    if (array->length == array->capacity)
    {
        expand(array);
    }

    array->arr[array->length] = item;
    array->length = array->length + 1;
    return 1;
}

DynamicArray *create_array(int first)
{
    DynamicArray *new_array = malloc(sizeof(DynamicArray));

    new_array->arr = malloc(sizeof(int) * START_ARRAY_SIZE);
    new_array->arr[0] = first;
    new_array->capacity = 10;
    new_array->length = 1;

    return new_array;
}

int main()
{
    DynamicArray *array = create_array(1);

    push(array, 2);
    push(array, 3);
    push(array, 4);
    push(array, 5);

    insert(array, 43, 2);
    for (int i = 0; i < array->length; i++)
    {
        printf("Element %d: %d\n", i, array->arr[i]);
    }

    printf("Length: %d \n", array->length);
    printf("Capacity: %d \n", array->capacity);
    printf("===========\n");

    delete(array, 2);

    push(array, 4);
    push(array, 4);
    push(array, 4);
    push(array, 4);
    push(array, 4);
    push(array, 4);
    push(array, 4);
    push(array, 4);
    push(array, 4);
    push(array, 4);
    push(array, 4);
    push(array, 4);
    push(array, 4);
    push(array, 4);
    push(array, 4);
    push(array, 4);
    push(array, 4);
    push(array, 4);
    push(array, 4);
    push(array, 4);
    push(array, 4);
    push(array, 4);
    push(array, 4);
    int result = includes(array, 4);

    printf("Includes %d", result);
    for (int i = 0; i < array->length; i++)
    {
        printf("Element %d: %d\n", i, array->arr[i]);
    }
    delete(array, 2);
    printf("Length: %d \n", array->length);
    printf("Capacity: %d \n", array->capacity);
    free(array->arr);
    free(array);
}