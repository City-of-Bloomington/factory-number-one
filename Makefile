SASS := $(shell command -v sassc 2> /dev/null)
BUILD=build/fn1

default: clean compile package

clean:
	rm -Rf ${BUILD}
	mkdir -p ${BUILD}

compile: deps
	cd themes/default/scss && sassc -t compact -m default.scss default.css
	cd themes/kirkwood/scss && sassc -t compact -m kirkwood.scss kirkwood.css

package:
	cp themes/default/scss/default.css* ${BUILD}
	cp themes/kirkwood/scss/kirkwood.css* ${BUILD}
	rsync -rl ./static/ ./${BUILD}/
	cp LICENSE ${BUILD}
	cp README.md ${BUILD}
	cd build && tar czf fn1.tar.gz fn1

deps:
ifndef SASS
	$(error "sassc is not installed")
endif
