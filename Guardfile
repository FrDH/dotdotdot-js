# Guardfile for the jQuery dotdotdot plugin javascript files.
# This minifies the non-minified .js-file.

# For some reason, uglify only seems to work if the input and output is the same file.
# Therefor, we need to copy the contents from the original file to the minified file (using concat) before it can be minified.
guard :concat, type: "js", files: %w(jquery.dotdotdot), input_dir: "src/js", output: "src/js/jquery.dotdotdot.min"

# Minify the file
guard 'uglify', :destination_file => "src/js/jquery.dotdotdot.min.js" do
  watch ('src/js/jquery.dotdotdot.min.js')
end