import { Component, OnInit } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { ArrayDataSource } from '@angular/cdk/collections';

interface Node {
  item: string;
  isChecked: boolean;
  children?: Node[];
}

const TREE_DATA: Node[] = [
  {
    item: 'Fruit',
    isChecked: true,
    children: [
      { item: 'Apple', isChecked: false },
      { item: 'Banana', isChecked: false },
      {
        item: 'Fruit loops',
        isChecked: false,
        children: [
          { item: 'Broccoli', isChecked: false },
          { item: 'Brussel sprouts', isChecked: false }
        ]
      },
    ]
  }, {
    item: 'Vegetables',
    isChecked: false,
    children: [
      {
        item: 'Green',
        isChecked: false,
        children: [
          { item: 'Broccoli', isChecked: false },
          { item: 'Brussel sprouts', isChecked: false }
        ]
      }, {
        item: 'Orange',
        isChecked: false,
        children: [
          { item: 'Pumpkins', isChecked: false },
          { item: 'Carrots', isChecked: false, children: [] }
        ]
      },
    ]
  },
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  treeControl = new NestedTreeControl<Node>(node => node.children);
  dataSource = new ArrayDataSource(TREE_DATA);

  constructor() { }

  ngOnInit() {
  }

  hasChild = (_: number, node: Node) => {
    return !!node.children && node.children.length > 0;
  }
}
