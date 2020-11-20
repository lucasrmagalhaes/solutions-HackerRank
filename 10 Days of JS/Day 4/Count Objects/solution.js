function getCount(objects) {

    var ctr = 0;
    
    for (var i = 0; i < objects.length; i++) {
      if (objects[i].x == objects[i].y) {
        ctr++;
      }
    }

    return ctr;
}

/**
 * Expected Output:
 * 2
 */