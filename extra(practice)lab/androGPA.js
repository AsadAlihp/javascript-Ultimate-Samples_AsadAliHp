public class Me extends Activity {

	EditText n1;
	EditText n2;
	TextView r;
	Button b;
	double x = 0, y=0, z=0, xx=0,yy=0,zz=0,t=0;
	
		x = Double.parseDouble(n1.getText().toString());
		y = Double.parseDouble(n2.getText().toString());
		z = Double.parseDouble(n3.getText().toString());
		xx = Double.parseDouble(n4.getText().toString());
		yy = Double.parseDouble(n5.getText().toString());
		zz = Double.parseDouble(n6.getText().toString());
	/** Called when the activity is first created. */
	@Override
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.me);

		n1 = (EditText) findViewById(R.id.n1);
		n2 = (EditText) findViewById(R.id.n2);
		r = (TextView) findViewById(R.id.r);
		b = (Button) findViewById(R.id.b);
		b.setOnClickListener(new Button.OnClickListener() {
			public void onClick(View v) {
				totalmarks();
			}
		});
	}

	private void totalmarks() {
		
		t = x + y + z + xx + yy + zz;
		r.setText(Double.toString(t));
	}
	
	private void gpa(){
		
	
	}
}