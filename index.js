function BoardMember(name, homeState, training){
  this.name = name
  this.homeState = homeState
  this.training = training
}
  BoardMember.prototype.veto = function(){
    return 'No, I must disagree'
  }
  BoardMember.prototype.approve = function(){
    return 'You can do that!'
  }
  BoardMember.prototype.doCharity = function(){
    return "I like to help people."
  }
   BoardMember.prototype.releasePressStatement = function(){
    return "You will see great things from Scuber."
  }
   BoardMember.prototype.sayHi = function(){
  return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`
}


class Ceo extends BoardMember {
  hireEmployee(){
    return `Welcome aboard!`
  }
}


// build an ES2015 `Ceo` class with the following properties: `name`, `training`, and `homeState`.  Use inheritance to accomplish this.  A `Ceo` should have all of the methods that a `boardMember` has.
//
// Add a new method giving the `Ceo` the ability to hire new employees.  This functionality should not be available to a board member.  So the `Ceo` would have one new method:
// + `hireEmployee` — returns `Welcome aboard!`
