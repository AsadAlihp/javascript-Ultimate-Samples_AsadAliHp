
var a, b, c, d, e, f, g, h, i, j = 10, k = 10;

            for (a = 1; a < 10; a++)
            {
                k--;
                for (b = k; b > 0; b--)
                {
                    document.write("_");

                }
                document.write("*");
                if (a == 5)
                {

                    for (c = a; c > 0; c--)
                    {
                        document.write("*");
                    }
                }
                else
                {
                    for (c = a; c > 0; c--)
                    {
                        document.write("_");
                    }

                }

                document.write("*");
                /////////////////////////SSSSSSSSSSSSS/////////////////////////////////
                if (a >= 9)
                {
                    for (b = 0; b < 5; b++)
                    {
                        document.write("_");
                    }
                    for (b = 0; b < 5; b++)
                    {
                        document.write("*");
                    } document.write("_");
                }
                if (a == 1)
                {
                    ///////////////top of S///////////////
                    for (g = 0; g < 5; g++)
                    {
                        document.write("_");
                    }

                    for (b = 0; b < 5; b++)
                    {
                        document.write("*");
                    } document.write("_");
                    /////////mid of S/////////////////
                } if (a == 5)
                {

                    for (b = 5; b > 0; b--)
                    {
                        document.write("_");

                    }
                    for (b = 5; b > 0; b--)
                    {
                        document.write("*");


                    }

                }
                ////////////top<mid of S////////////
                else if (a < 5 && a != 1)
                {


                    for (b = 5; b > 0; b--)
                    {
                        document.write("_");

                    }
                    document.write("*");
                    for (b = 5; b > 0; b--)
                    {
                        document.write("_");

                    }

                }
                //////////below the mid port of S////
                else if (a > 5 && a < 9)
                {


                    for (b = 10; b > 0; b--)
                    {
                        document.write("_");

                    }
                    document.write("*");
                    
                }

                ////////////////////////AAAAAAAAa///////////////

                
                    j--;
                    
                    if (a < 5) {
                        for (b = j; b > 0; b--)
                        {
                            document.write("_");

                        }
                        document.write("*");
                    }
                    if (a > 5)
                    {
                        for (b = j; b > 0; b--)
                        {
                            document.write("_");

                        }
                        document.write("*");
                    }
                    if (a == 5)
                    {
                        for (b = 6; b > 0; b--)
                        {
                            document.write("_");

                        }
                        for (c = a; c > 0; c--)
                        {
                            document.write("*");
                        } document.write("_");
                    }
                    else
                    {
                        for (c = a; c > 0; c--)
                        {
                            document.write("_");
                        }

                    }

                    document.write("*");
                

                ////////////////AAAA//////////////////////////
                    if (a >= 2 && a < 9)
                    {
                        for (h = 4; h > 0; h--)
                        {
                            document.write("_");
                        } document.write("*");
                        for (h = 5; h > 0; h--)
                        {
                            document.write("_");
                        }
                    }
                    else {
                        for (h = 4; h > 0; h--)
                        {
                            document.write("_");
                        }
                        for(h=0;h<7;h++){
                            document.write("*");
                        }
                    }
                    for (h = 1; h > 0; h--) {
                        document.write("_");
                    }
                    if (a >= 2 && a < 9)
                    {

                        document.write("*");
                    }
                    

                    document.write("<br />");
                }
               
 