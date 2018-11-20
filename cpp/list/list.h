#ifndef _LIST_H
#define _LIST_H

typedef struct Node {
  int value;
  struct Node *prev;
  struct Node *next;
} node_t;

typedef struct List {
  node_t* begin;
  node_t* end;
  int size;
} list_t;

list_t* list_create();

node_t* list_create_node(int value);

void list_destroy(list_t** list);

void list_print(list_t* list, int reverse);

node_t* list_insert(list_t *list, node_t* after, node_t* node);

#endif