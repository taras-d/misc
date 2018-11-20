#include <stdlib.h>
#include <stdio.h>
#include <assert.h>

#include "list.h"

void run_list_test() {
  list_t* list;
  node_t* node;

  // Create list
  list = list_create();
  assert(list);
  assert(list->size == 0);
  assert(list->begin == NULL);
  assert(list->end == NULL);

  // Add nodes to the end
  list_insert(list, list->end, list_create_node(2));
  list_insert(list, list->end, list_create_node(3));
  list_insert(list, list->end, list_create_node(5));
  assert(list->size == 3);
  assert(list->begin);
  assert(list->begin->value == 2);
  assert(list->end);
  assert(list->end->value == 5);

  // Add node to the begin
  list_insert(list, NULL, list_create_node(1));
  assert(list->size == 4);
  assert(list->begin);
  assert(list->begin->value == 1);
  assert(list->end);
  assert(list->end->value == 5);

  // Insert node after 3rd node
  list_insert(list, list->begin->next->next, list_create_node(4));
  assert(list->size == 5);
  assert(list->begin);
  assert(list->begin->value == 1);
  assert(list->end);
  assert(list->end->value == 5);

  // Loop over nodes
  int expect[] = {1, 2, 3, 4, 5};
  int expect_index = 0;
  node = list->begin;
  while (node) {
    assert(node->value == expect[expect_index]);
    node = node->next;
    ++expect_index;
  }

  // Destroy list
  list_destroy(&list);
  assert(list == NULL);
};
