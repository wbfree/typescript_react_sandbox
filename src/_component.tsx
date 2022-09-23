import { useState, useEffect } from "react";

function _useState<Type>(arg: Type): any {
  return useState(arg);
}

function _useEffect(component: _Component): any {
  useEffect(() => {
    component.setter(10);
  }, []);
}

export class _Component {
  public value: any;
  public setter: any;

  constructor() {
    const [value, setter] = _useState(0);
    this.value = value;
    this.setter = setter;
    _useEffect(this);
  }

  increment() {
    this.setter(this.value + 1);
  }
}
