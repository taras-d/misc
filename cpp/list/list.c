#include <stdlib.h>
#include <stdio.h>

#define DEBUG 1

// Node structure
typedef struct Node {
  int value;
  struct Node *prev;
  struct Node *next;
} node_t;

// List structure
typedef struct List {
  node_t* begin;
  node_t* end;
  int size;
} list_t;

// Create list
list_t* list_create() {
  // allocate memory
  list_t* list = malloc(sizeof(list_t));
  if (DEBUG) {
    printf("[allocate list]: %i\n", list);
  }

  // set default values
  list->begin = NULL;
  list->end = NULL;
  list->size = 0;

  return list;
}

// Create node
node_t* list_create_node(int value) {
  // allocate memory
  node_t* node = malloc(sizeof(node_t));
  if (DEBUG) {
    printf("[allocate node]: %i\n", node);
  }

  // set default values
  node->value = value;
  node->next = NULL;
  node->prev = NULL;

  return node;
}

// Destroy list
void list_destroy(list_t** list) {
  // destroy all nodes starting from begin
  node_t* node = (*list)->begin;

  while (node) {
    // destroy node
    free(node);
    if (DEBUG) {
      printf("[deallocate node]: %i\n", node);
    }

    // move to next node
    node = node->next;
  }

  // destroy list
  free(*list);
  if (DEBUG) {
    printf("[deallocate list]: %i\n", *list);
  }

  *list = NULL;
}

// Print list
void list_print(list_t* list, int reverse) {
  node_t* node = reverse? list->end: list->begin;
  while(node) {
    printf("%i ", node->value);
    node = reverse? node->prev: node->next;
  }
  printf("\n");
}

// Insert new node after specified node
// If "after" node is NULL - insert to the begin of list
node_t* list_insert(list_t *list, node_t* after, node_t* node) {
  // update related links
  if (after) {
    node->prev = after;
    node->next = after->next;
    after->next = node;
  } else {
    node->prev = NULL;
    node->next = list->begin;
    if (list->begin) {
      list->begin->prev = node;
    }
  }

  // if new node doesn't have previus node
  // set new node as begin of list
  if (!node->prev) {
    list->begin = node;
  }

  // if new node doesn't have next node
  // set new node as end of list
  if (!node->next) {
    list->end = node;
  }

  // update size
  list->size += 1;
}